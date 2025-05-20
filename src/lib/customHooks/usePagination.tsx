import { useState } from "react";

export default function usePagination({
  total,
  limit,
  defaultPage,
}: {
  total: number;
  limit: number;
  defaultPage: number | undefined;
}) {
  const [currentPage, setCurrentPage] = useState(defaultPage || 1);
  const totalPages = Math.ceil(total / limit);
  const boundaryCount = 1;
  const siblingCount = 1;
  const range = (start: number, end: number) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, i) => start + i);
  };
  const startPages = range(1, Math.min(boundaryCount, totalPages));
  const endPages = range(
    Math.max(totalPages - boundaryCount + 1, boundaryCount + 1),
    totalPages
  );
  const siblingsStart = Math.max(
    Math.min(
      // Natural start
      currentPage - siblingCount,
      // Lower boundary when page is high
      totalPages - boundaryCount - siblingCount * 2 - 1
    ),
    // Greater than startPages
    boundaryCount + 2
  );

  const siblingsEnd = Math.min(
    Math.max(
      // Natural end
      currentPage + siblingCount,
      // Upper boundary when page is low
      boundaryCount + siblingCount * 2 + 2
    ),
    // Less than endPages
    endPages.length > 0 ? endPages[0] - 2 : totalPages - 1
  );

  // Basic list of items to render
  // for example itemList = ['first', 'previous', 1, 'ellipsis', 4, 5, 6, 'ellipsis', 10, 'next', 'last']
  const pages = [
    "previous",
    ...startPages,
    // Start ellipsis
    // eslint-disable-next-line no-nested-ternary
    ...(siblingsStart > boundaryCount + 2
      ? ["start-ellipsis"]
      : boundaryCount + 1 < totalPages - boundaryCount
        ? [boundaryCount + 1]
        : []),

    // Sibling pages
    ...range(siblingsStart, siblingsEnd),

    // End ellipsis
    // eslint-disable-next-line no-nested-ternary
    ...(siblingsEnd < totalPages - boundaryCount - 1
      ? ["end-ellipsis"]
      : totalPages - boundaryCount > boundaryCount
        ? [totalPages - boundaryCount]
        : []),

    ...endPages,
    "next",
  ];
  const handleNextPage = () => {
    if (currentPage >= totalPages) return currentPage;
    const page = currentPage + 1;
    setCurrentPage(page);
    return page;
  };
  const handlePrevPage = () => {
    if (currentPage === 1) return currentPage;
    const page = currentPage - 1;
    setCurrentPage(page);
    return page;
  };
  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return { currentPage, handleNextPage, handlePrevPage, goToPage, pages };
}
