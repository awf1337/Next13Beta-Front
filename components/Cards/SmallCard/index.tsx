import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from '@material-tailwind/react';
import { color } from '@material-tailwind/react/types/components/alert';

interface StatisticsCardProps {
  color: color;
  icon: any;
  title: string;
  value: number;
  isLoading?: boolean;
  footer?: string;
}

const StatisticsCard = ({
  color,
  icon,
  title,
  value,
  footer,
  isLoading = false,
}: StatisticsCardProps) => {
  return (
    <Card className="w-64 ">
      <CardHeader
        variant="gradient"
        color={color}
        className="absolute -mt-4 grid h-16 w-16 place-items-center"
      >
        {icon}
      </CardHeader>
      <CardBody className="py-1 px-3 text-right">
        {isLoading || isNaN(value) ? (
          'loading...'
        ) : (
          <Typography variant="h4" color="blue-gray">
            {value}$
          </Typography>
        )}
        <Typography variant="small" className="font-normal text-blue-gray-600">
          {title + '100'}
        </Typography>
      </CardBody>
      {footer && (
        <CardFooter className="border-t border-blue-gray-50 p-4">
          {footer}
        </CardFooter>
      )}
    </Card>
  );
};
export default StatisticsCard;
