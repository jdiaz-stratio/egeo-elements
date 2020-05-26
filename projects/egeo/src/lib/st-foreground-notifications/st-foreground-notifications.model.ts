
export interface StNotificationElement {
   text?: string;
   html?: string;
   status?: string;
   nameEvents?: string [];
}

export interface StatusNotification {
   showMore: boolean;
   completeText: boolean;
}

export class StatusNotification implements StatusNotification {
   showMore: boolean;
   completeText: boolean;

   constructor(private _showMore: boolean, private _completeText: boolean) {
      this.showMore = _showMore;
      this.completeText = _completeText;
   }
}
