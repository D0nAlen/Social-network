import styles from "./Paginator.module.css";

let Paginator = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  let viewPagesCount = pagesCount;
  if (pagesCount > 20) viewPagesCount = 20;
  for (let i = 1; i <= viewPagesCount; i++) {
    pages.push(i);
  }
  // for (let i = 1; i <= pagesCount; i++) {
  //   pages.push(i);
  // }

  return (
    <div>
      {pages.map((page) => {
        return (
          <span
            className={props.currentPage === page ? styles.selectedPage : ""}
            onClick={() => {
              props.onPageChanged(page);
            }}
            key={page}
          >
            {page}
          </span>
        );
      })}
    </div>
  );
};

export default Paginator;
