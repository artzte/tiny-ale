# frozen_string_literal: true

class ContractsController < ApiBaseController
  PERMITTED_INCLUDES = %w[category facilitator assignments meetings credit_assignments credit_assignments.credit term learning_requirements].freeze

  before_action :get_contract, only: [:destroy, :update]

  def index
    order = (params[:order] || '').split(',').map(&:underscore).join(',')

    conditions = {}

    if params[:schoolYear]
      conditions[:term_id] = Term
                             .where(school_year: params[:schoolYear])
                             .select(:id)
                             .collect(&:id)
    end

    conditions[:contract_id] = params[:contractIds] if params[:contractIds]

    conditions[:category_id] = params[:categoryIds] if params[:categoryIds]

    if params[:facilitatorIds]
      conditions[:facilitator_id] = params[:facilitatorIds]
    end
    conditions[:term_id] = params[:termIds] if params[:termIds]

    if params[:status]
      conditions[:contract_status] = case params[:status].downcase
                                     when 'proposed'
                                       Contract::STATUS_PROPOSED
                                     when 'active'
                                       Contract::STATUS_ACTIVE
                                     when 'closed'
                                       Contract::STATUS_CLOSED
                                     when 'all'
                                       nil
                                     else
                                       return render json: { message: 'invalid status parameter' }, status: 400
      end
    end
    conditions.delete :contract_status if conditions[:contract_status].nil?

    result = Contract
             .where(conditions)
             .order(Arel.sql(order))
             .limit(@limit)
    count = Contract.where(conditions).count

    options = {
      meta: {
        count: count
      },
      include: included_models
    }

    render json: ContractSerializer.new(result, options)
  end

  def show
    contract = Contract.find params[:id]

    render json: ContractSerializer.new(contract, detail_options)
  end

  def create
    @contract = Contract.create
    @contract.creator = current_user

    update_contract

    render json: ContractSerializer.new(@contract, detail_options)
  end

  def update
    update_contract

    render json: ContractSerializer.new(@contract, detail_options)
  end

  def destroy

  end

protected
  def get_contract
    @contract = Contract.find params[:id]
  end

  def contract_attributes
    attributes = params.dig(:data, :attributes)

    return nil unless attributes

    attributes.permit(:name, :location, :learning_objectives, :competencies, :evaluation_methods, :instructional_materials)
  end

  [:facilitator, :category, :term].each do |relation|
    self.define_method("contract_#{relation}") do
      params.require(:data)
        .permit(relationships: {})
        .dig(:relationships, relation, :data, :id)
    end
  end

  def update_contract
    @contract.facilitator = User.find contract_facilitator if contract_facilitator
    @contract.category = Category.find contract_category if contract_category
    @contract.term = Term.find contract_term if contract_term
    @contract.update_status contract_attributes[:status] if contract_attributes and contract_attributes[:status]

    learning_requirements = params.dig(:data, :relationships, :learning_requirements, :data)
    if learning_requirements
      @contract.learning_requirements.clear
      new_learning_requirements = LearningRequirement.where(id: learning_requirements.map{|c| c[:id]})
      @contract.learning_requirements << new_learning_requirements
    end
    
    @contract.update_attributes contract_attributes if contract_attributes

    @contract.save!
  end

  def included_models(options = {})
    if options[:all]
      return PERMITTED_INCLUDES
    end
    
    if params[:include]
      return params[:include].split(',').map(&:underscore) & ContractsController::PERMITTED_INCLUDES
    end

    nil
  end

  def detail_options
    {
      include: included_models(all: true),
      params: {
        details: true,
      },
    }
  end
end
