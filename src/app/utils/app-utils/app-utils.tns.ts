import { Inject } from '@angular/core';

import { debugLog } from '@src/app/utils/app-utils/app-utils.common';

@Inject({})
export class AppUtils {
    debugLog = debugLog;
    platformVal = (vals: { web?: any; mobile: any; android: any; ios: any; }) => {
        return vals.mobile;
    }
}