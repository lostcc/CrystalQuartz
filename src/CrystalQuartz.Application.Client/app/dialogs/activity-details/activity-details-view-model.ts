﻿import { DialogViewModel } from '../dialog-view-model';
import TimelineActivity from '../../timeline/timeline-activity';
import { TimelineActivityViewModel} from '../../timeline/timeline-activity-view-model';

export default class ActivityDetailsViewModel extends DialogViewModel<any> {
    activityModel: TimelineActivityViewModel;
    fireInstanceId: string;

    constructor(
        private activity: TimelineActivity) {

        super();

        this.activityModel = new TimelineActivityViewModel(activity);
        this.fireInstanceId = activity.key;
    }

    loadDetails() {
        this.activityModel.init();
    }

    releaseState() {
        this.activityModel.dispose();
    }
}