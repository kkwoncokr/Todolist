import {todo} from './stores/todo';
import {auth} from './stores/auth';

// redux store index와 같은 구조 인듯.
const useStore = () => ({todo,auth});

export default useStore;