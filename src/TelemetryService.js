import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { ReactPlugin } from '@microsoft/applicationinsights-react-js';

class TelemetryService {

    constructor() {
        this.reactPlugin = new ReactPlugin();
    }

    initialize(reactPluginConfig) {
        let INSTRUMENTATION_KEY = "b3279a0e-ab34-4bbb-8601-8a18338b5112"; // Enter your instrumentation key here
        
        this.appInsights = new ApplicationInsights({
            config: {
                instrumentationKey: INSTRUMENTATION_KEY,
                maxBatchInterval: 0,
                disableFetchTracking: false,
                extensions: [this.reactPlugin],
                extensionConfig: {
                    [this.reactPlugin.identifier]: reactPluginConfig
                }
            }
        });
        this.appInsights.loadAppInsights();
    }
}

export let ai = new TelemetryService();
