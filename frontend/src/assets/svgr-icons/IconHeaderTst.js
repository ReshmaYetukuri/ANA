import * as React from 'react';

const SvgIconHeaderTst = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 85 60"
    style={{
      enableBackground: 'new 0 0 85 60',
    }}
    xmlSpace="preserve"
    {...props}
  >
    <image
      style={{
        overflow: 'visible',
      }}
      width={85}
      height={60}
      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFUAAAA8CAMAAAAg0Ab6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ bWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6 eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1 MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEu MC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVz b3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1N Ok9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjMjcwNTM2Yi1iN2I2LTJjNGEtOTQwMy01NmQy NDgwNTMxNTkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Qzc5NTMwOUY1NUQ1MTFFM0IyMDM4 QTEwNjA3QUUzNjgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Qzc5NTMwOUU1NUQ1MTFFM0Iy MDM4QTEwNjA3QUUzNjgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5k b3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmZjZTU2 NTBkLTQ2NjAtODE0Yi1hN2ZhLTYwNjNkMmQ2NjViZiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRp ZDpjMjcwNTM2Yi1iN2I2LTJjNGEtOTQwMy01NmQyNDgwNTMxNTkiLz4gPC9yZGY6RGVzY3JpcHRp b24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz46P8yLAAADAFBM VEW32PwAUakAYcoASZkATaG60us0ZJkAaNkAdPIAZ9Z3qOJCdboAYswkZbQTYrcnWpEASJbb5fMA at11pdgARpEAX8b1+Pvs8vnL2uoAbuRXhrkAWrw1c7YAV7T8/f4AbOHE0+q8zN0AceyEu/fE0+TM 4/vc5O4AcOlmmtMcbcQnYqWUuuR7o85plseItucAWLZ6mbuctM0AU6xDgsg1e8cYV5xpq/OTrMhX luiXr8m3y+CqxOBFidFCmfecx/YAWLgARI4AXMAAVK8ATJ7w9frM3vKIsNzp7fabu96lzflBe8oA UKacsdVXfrhuqOYoher09voLRYOkutIvaqqSvPB2lrnc6/uJpcMmedfU4vKqvuHg6PDR2+4AZNDW 4ewATqNZmNtGcqGtwNUnbcGpvtSqu9mivdr3+v6MsNYAVK4AQolxmMMAZdIAS5zm7fUVTIimxehs jrSzxdiNqdoafehUfKiFo8ONo8vO2eZLgbySsNAYXacAVrNlirLR2urm8PxChulYgsN0s/dhjLri 7Pi3ydvR3fQAXcLR3OlLfLFbgau4yuyNptK4zeXJ1uUAR5RrjcRYidY9cav6/P5XoO8DPn/e6fQK Y8TG3/ni6/U0hd6ErdoAWruNrOF9m85PjtEfVI24xd2bweqQqsZOnPJekcpGd6oAYMhJdKKFpsoA W75Yj+RCbatYhc2cuNacs9zF0OQPUZl9ndMOVqUUfvH09/yKqs24x+V/nr8AQ4xcjMByk7eNqMVO eKUJXLXQ3u6cr9Cfts7Q5PoGQYBXjsmxw9cXd99Cb7EAWbkAVbEAXsQAb+cAa98AY88AZtRgha4+ a5xvkba+zt6vyOMFadTd5vfp7vgRacgFTJkKVqgMX7p+sOgFcOSv0/kPeOoKefFIk+MEb+SXttcV YLAAc++EqM8wecgFV7Ecge4HSI8KbdmnyOwGd/GqwOerzO6wx+CzzOh1mcDu9v4IT55Ui8cOTJDF 1fXA2PI8ke3H2e0JWK7j6vGQwfYujPP///8APH2halrFAAABAHRSTlP///////////////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// //////////////8AU/cHJQAAB5hJREFUeNrE2HlYTWkcB/BK94a6bmlT6lYkrW6iUjJaRZR7LWVJ aUqRtFlLbhNjWpgyJWuRNe5YMkSRpWxFCGMfzGDMmLGbGQxzzO99z3LPvacsMc+c5/E4//S57/v9 ve/vnPOqvfkvLrWP+3NhSljZp1WT8nqO1XPQd/90qjQqbJZxsq1dfX+xv/STqMV8ZysjXvu7cnkJ oOaP93+8WjYnRhTQw2tpto+PvDNCM2zJCIpbqyZN97AJXTv+UrnhiexshNYDmhEdgUZ/TuTcCvVw 04z8pw9DRuloaAB6AqEl9WJxRkaD7/JUUcCAXnai4g9U+fvmFz2/tuL0uFM6OjRKhgropIEOl2DU 4gD+B6hlZ4YRdSN+/O306QQKhflDqBTa4OtyJBnfDxj5nqp0v3tE5meLj2lptWsHKKga5cqhAupy myhBP9DL6j3U4qYq68rrbkMbO3ZkoRoY3ao3hg51kouL+sG7aNQHjKTvUIUpR0XLur74ycICo1qA JrBCjSYC6VABVZ+oj0fNi3qLmpRX+yr09fobJ01MTCwaG0lUJVQ9YvuYcJmsAaOD03h41PphLajS TTU5mYPcfu3SvTtGyaGSqCLU6O2BBL6yMDr4StwBNGqzWc2oaCnHqc39586dLiqocqg+WyUEdQ3B aGQkrxeqmotxEkctFnXr2u9+2zsUepJBVUNFaGBgIMxZO4tSHVf6olH3zeOoUWpt0YXQLjTaXKjy cIKwFO8hsshKIVTTrBO+d+rJUaVxNxm0O10pTqhQKZj5d+ariCG+DOqnaXwb3QvGcnO16teWmX/L oco7g6qnLSBki+DCqKbflL5/4B/QE3JU565vCZXVU8IJxRUYjNEpTgPxqG+lcFR+t2ZDTVAKFbZ/ loTFSo5r+oFqvwSP2vRz7soS7WJQ7vKnQkXbP8sSu4Ey9N8hhLZpM1aA1J10N2TtgpjF7w61ntr+ LgKiYnAwVhGqe8sJVc3vJZ+jzvlMBW0mVMX2t5EMjrQBFaFtdE374oB/duaoZaHvDlXRUyYQwTNh rFswWrBDFImqpn2O2wdshna/MXTotB9aDpVs1KsWCdQFQwgcK56/boFBJzMUxbNKqaoqtarLfBpa l1nUbcSLjm9r1DJmCTCowWZHHLDnJmVVWBM3aP00E5ToipDnRIgWu1JKT79JQyhzzRYy1AJQN/Lw D0yuUVKrns69iSplAaM8nXBq1O9EH6Wewg5VWyaTTTi0hpipQA3uGT1D98NzWGqZx/VdUCoaHaej Yej15bUWnn7U9g8mKpj5G3h7e+biH0hMYlQhMRe2FQwV5q/VDqHlJ7LtAno0//SjeoqmRMJCq5/s xvexebQq9XBjofDUR6i85OrLa4rlz376UT2lQrKFmr83qPyD+Afm1dLqutdt2WhQ6QPDbJ/O9eIO S8ZzQ2Xa3xR7JlRAq+MvuqJ711eUmld3H6MmGE24QBALMJrR0FtUrhwqC/VjhwpofIwpHnWEkFSJ F7D/mfJ/A0tmqo8coZNcBrZnhdrADpWDxs/Zhu/TU7C6SQ01lS9G/PXVKFSpUlCD5CX9zQFVF4iU V6oyqgg1Pp7/xLoQ/0BuKlZT18P8+1QCdgGV/wG0eoz6Qlkiv/ZqIVQ26jov5mLObhKt/rPoMKjS p/dRqN8idgGUH1r9GBQqRjX3JjeLKua/IzjdZsk2U1d61NXx1k2g7r9Olh+zD3TK0cMOhYrQSL/Z mc2ESqOXCzfnix452bOigCyqqkCt6kpVCrOlqFhkpUD1m9Im0a6FUIdP9pRYOkKnUl5f8fEb54Pq 7oY2aiOUvz3qGJYEES7W1saoJvxFfm+V+SN09t7YxNET03bS+TJL4V7hjHwRfH2oxSxmNmop2Yr0 bIgKjMI4dD29VELdmZYekRi74TZ30dpPnm90zpmPHl2gKjYqxRIVC2m0wNOLFaq6maNl0WPbaNWi FRi4zotNzKnZRL/Bqnm40WipZSU2V/kyI4Ue31tM9ZRop/P+L1cG/eKiumh35KZHvKrNS2J/w5x9 TbVUWKkX94xBqmDhmpmRJGrgfxXNv8ORgcv1HFZf5Wyvy4WO1kWpKULVrzj+MrqlRgf5yIPQmwP8 k6FKAWo/2vxArwEHCfi4JBshe9EKnB75W1c1FTfzbVgsOsa01K3b8euO7FAwNX/vJ895cTz9u3jP KhUNlsHyCPf90pa+5GtC6JYaTg30OB2qd3XOWq+lyu8BgF5Jm3iQGHam7G3nA8LQ7xEKLXXqnoWC hejJSaPeG3ns7opfqM0ceXHz9/HfeeqwLuSUTrkh1VIFaGHRqHfOavZ7gG+07Xnj/BlNh9/nLENY OUrD8ATdUm2IwENkpbyrqxzoNzZxBiyDJTYe05Pe+4Tk7OhLgFItNfg4Kr8uQnNFdmR3hWUQIIqZ U/Zh5y4zni9VtFSmUoVGXgi9q88zsiI34gee5oQF2DEtlUZNjcZn29kmG88Ki5K28oxopL+tOdVS SXTHsIftHfTG9sxLas2xDP1GxO85esPfZEuFStnvlsQVHeVsxFacZ/FrK887ppkNz52X3okYKZUW v2n9paZ0HBCWmj/LqvYs/38+e2vh+leAAQCOs/ZsEWHvtgAAAABJRU5ErkJggg=="
    />
  </svg>
);

export default SvgIconHeaderTst;
