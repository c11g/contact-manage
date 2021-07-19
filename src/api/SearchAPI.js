import axios from 'axios';
import {BASE_URL} from '@/constant';

export const searchContact = (name) => axios.get(`${BASE_URL}/${name}`);