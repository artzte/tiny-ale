import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  tinyData: service(),

  actions: {
    updateRoll(meetingParticipant) {
      const { tinyData } = this;
      const data = meetingParticipant;

      if (meetingParticipant.id) {
        return tinyData.fetch(`/api/meeting_participants/${meetingParticipant.id}`, {
          method: 'PUT',
          data,
        });
      }

      return tinyData.fetch('/api/meeting_participants', {
        method: 'POST',
        data,
      });
    },

    updateAllRolls(contactType, participation) {
      const { meeting, tinyData } = this;
      const data = {
        attributes: {
          contactType,
          participation,
        },
      };

      return tinyData.fetch(`/api/meetings/${meeting.id}/update-roll`, {
        method: 'PATCH',
        data,
      });
    },
  },
});
