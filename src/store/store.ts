import { reducer } from './reducer';
import { PersistenceKeys } from '../utils/storage';
import storage from '../utils/storage';

export let emptyState = {
    screen: 'LOGIN',
    background: 'red',
};

// Recupera el estado almacenado del localStorage
export let appState = storage.get({ key: PersistenceKeys.STORE, defaultValue: emptyState });

// Por debajo de esta línea se encuentran la configuración y los detalles de implementación...
let observers: any = [];

const persistStore = (state: any) => storage.set({ key: PersistenceKeys.STORE, value: state, session: false });

const notifyObservers = () => observers.forEach((o: any) => o.render());

export const dispatch = (action: any) => {
    const clone = JSON.parse(JSON.stringify(appState));
    const newState = reducer(action, clone);
    appState = reducer(action, clone);

    persistStore(newState);
    notifyObservers();
};

export const addObserver = (ref: any) => {
    observers = [...observers, ref];
};
