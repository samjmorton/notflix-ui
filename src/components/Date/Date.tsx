import {parseISO, format} from 'date-fns';

export const Date: React.FC<IProps> = ({dateString}) => (
  <time dateTime={dateString}>{format(parseISO(dateString), 'LLLL d, yyyy')}</time>
);

export interface IProps {
  dateString: string;
}
