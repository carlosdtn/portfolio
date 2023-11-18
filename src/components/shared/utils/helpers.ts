import { format } from 'date-fns';

export const formattedDate = (date: string | undefined) => {
  if (date) {
    const postDate: Date = new Date(date);
    return {
      year: postDate.getFullYear(),
      month: postDate.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short'
      })
    };
  } else {
    return {
      year: 'N/D',
      month: 'N/D'
    };
  }
};

export const formatDate = (date: string) => {
  const formattedDate = format(new Date(date), 'MMMM dd, yyyy');
  return formattedDate;
};
