import { SettingItemClass } from '../modals/SettingItemClass';
import { faBell, faUser } from '@fortawesome/free-regular-svg-icons';
import { faInfoCircle, faLock, faPalette } from '@fortawesome/free-solid-svg-icons';

export const SettingsList = [
    new SettingItemClass('Profile Info', faUser, 'profile'),
    new SettingItemClass('Security', faLock, 'security'),
    new SettingItemClass('Notification', faBell, 'notif'),
    new SettingItemClass('Theme', faPalette, 'theme'),
    new SettingItemClass('About', faInfoCircle, 'about'),
]