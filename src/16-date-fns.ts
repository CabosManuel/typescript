import { subDays, format } from 'date-fns';

const date = new Date(2014, 1, 28);
const result = subDays(date, 30);
const dateFormatted = format(result, 'yyyy-MM-dd');

console.log('🚀 ~ dateFormatted:', dateFormatted);
