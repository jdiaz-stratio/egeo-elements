import { StAlertsService } from './st-alerts.service';
export declare class StAlertsComponent {
    alertService: StAlertsService;
    /** @Input {boolean} [showInConsole=false] Display logs in console */
    showInConsole: boolean;
    /** @Input {string} [qaTag=] Component qa tag */
    qaTag: string;
    constructor(alertService: StAlertsService);
}
