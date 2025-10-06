import { useMemo } from "react";
import { Form, Pagination } from "react-bootstrap";

type Props = {
  total: number;
  current?: number;
  pageSize?: number;
  onChange: (page: number, pageSize?: number) => void;
  pageSizeOptions?: number[];
  showSizeChanger?: boolean;
  showQuickJumper?: boolean;
  classNames?: { root?: string; pagination?: string };
};

const BasePagination = ({
  total,
  pageSize = 10,
  current = 0,
  onChange,
  pageSizeOptions = [10, 20, 50, 100],
  showSizeChanger = false,
  showQuickJumper = false,
  classNames,
  ...props
}: Props) => {
  const totalPages = Math.ceil(total / pageSize);

  const pageItems = useMemo(() => {
    const items = [];

    const createItem = (page: number) => (
      <Pagination.Item
        key={page}
        active={page === current}
        onClick={() => onChange(page, pageSize)}
      >
        {page}
      </Pagination.Item>
    );

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        items.push(createItem(i));
      }
    } else {
      items.push(createItem(1));
      if (current > 4) items.push(<Pagination.Ellipsis key="start" disabled />);

      const start = Math.max(2, current - 1);
      const end = Math.min(totalPages - 1, current + 1);
      for (let i = start; i <= end; i++) {
        items.push(createItem(i));
      }

      if (current < totalPages - 3) {
        items.push(<Pagination.Ellipsis key="end" disabled />);
      }
      items.push(createItem(totalPages));
    }

    return items;
  }, [current, totalPages, pageSize, onChange]);

  return (
    <div
      className={`d-flex align-items-center gap-3 flex-wrap${
        classNames?.root ? " " + classNames?.root : ""
      }`}
    >
      <Pagination className={classNames?.pagination} {...props}>
        <Pagination.Prev
          disabled={current <= 1}
          onClick={() => current > 1 && onChange(current - 1, pageSize)}
        />
        {pageItems}
        <Pagination.Next
          disabled={current >= totalPages}
          onClick={() =>
            current < totalPages && onChange(current + 1, pageSize)
          }
        />
      </Pagination>

      {showSizeChanger && (
        <Form.Select
          style={{ width: "auto" }}
          size="sm"
          value={pageSize}
          onChange={(e) => onChange(1, parseInt(e.target.value))}
        >
          {pageSizeOptions.map((size) => (
            <option key={size} value={size}>
              {size} / page
            </option>
          ))}
        </Form.Select>
      )}

      {showQuickJumper && (
        <Form.Control
          style={{ width: 100 }}
          size="sm"
          type="number"
          min={1}
          max={totalPages}
          placeholder="Jump to"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const val = Number((e.target as HTMLInputElement).value);
              if (!isNaN(val) && val >= 1 && val <= totalPages) {
                onChange(val, pageSize);
              }
            }
          }}
        />
      )}
    </div>
  );
};

export default BasePagination;
