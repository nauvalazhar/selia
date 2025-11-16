import {
  Pagination,
  PaginationList,
  PaginationItem,
} from 'components/selia/pagination';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

export default function PaginationBasicExample() {
  return (
    <Pagination>
      <PaginationList>
        <PaginationItem disabled>
          <ChevronLeftIcon />
          <span className="hidden sm:inline">Previous</span>
        </PaginationItem>
        <PaginationItem active>1</PaginationItem>
        <PaginationItem>2</PaginationItem>
        <PaginationItem>3</PaginationItem>
        <PaginationItem>
          <span className="hidden sm:inline">Next</span>
          <ChevronRightIcon />
        </PaginationItem>
      </PaginationList>
    </Pagination>
  );
}
