import { taskListWatcherSagas } from './features/taskList/sagas';
import { accountListWatcherSagas } from './features/accountList/sagas';

export const sagas = [
    ...taskListWatcherSagas,
    ...accountListWatcherSagas
    // add other watchers to the array
];