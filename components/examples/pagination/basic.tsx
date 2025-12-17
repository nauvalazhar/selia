import {
  Pagination,
  PaginationList,
  PaginationItem,
  PaginationButton,
} from 'components/selia/pagination';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

export default function PaginationBasicExample() {
  return (
    <Pagination>
      <PaginationList>
        <PaginationItem>
          <PaginationButton disabled>
            <ChevronLeftIcon />
            <span className="hidden sm:inline">Previous</span>
          </PaginationButton>
        </PaginationItem>
        <PaginationItem>
          <PaginationButton active>1</PaginationButton>
        </PaginationItem>
        <PaginationItem>
          <PaginationButton>2</PaginationButton>
        </PaginationItem>
        <PaginationItem>
          <PaginationButton>3</PaginationButton>
        </PaginationItem>
        <PaginationItem>
          <PaginationButton>
            <span className="hidden sm:inline">Next</span>
            <ChevronRightIcon />
          </PaginationButton>
        </PaginationItem>
      </PaginationList>
    </Pagination>
  );
}
