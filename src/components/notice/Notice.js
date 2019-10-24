
import { notification } from 'antd';

import {Application} from '../../api/Application';

class Notification {

    static showSuccess(message) {
        notification["success"]({
            message: message,
            duration: Application.notice.duration,
        });
    }

    static showError(errorCode, message) {
        notification["error"]({
            message: errorCode,
            description: message,
            duration: Application.notice.duration,
        });
    }

    static showNotice(message) {
        notification["info"]({
            message: message,
            duration: Application.notice.duration,
        });
       
    }

    static showInfo(message) {
        notification["info"]({
            message: message,
            duration: Application.notice.duration,
        });
    }

}

/**
 * 构建Mobile组件
 */
function buildMobile() {
    return {
        swipeDismiss: Application.notice.mobile.swipeDismiss,
        styling: Application.notice.mobile.styling
    }
};

export {Notification};
 