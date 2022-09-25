import React from 'react';

function PageChanger({
  page,
  setPage,
  showAmount,
}: {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  showAmount: number;
}) {
  const prevPage = () => {
    setPage((prevState) => prevState - 1);
  };

  const nextPage = () => {
    setPage((prevState) => prevState + 1);
  };

  return (
    <div className='change-page'>
      {page < 1 ? (
        <p className='button-disabled'>Previous page</p>
      ) : (
        <button onClick={prevPage}>Previous page</button>
      )}
      <p>
        {page + 1} / {Math.ceil(1154 / showAmount)}
      </p>
      {page === Math.ceil(1154 / showAmount) ? (
        <p className='button-disabled'>Previous page</p>
      ) : (
        <button onClick={nextPage}>Next page</button>
      )}
    </div>
  );
}

export default PageChanger;
