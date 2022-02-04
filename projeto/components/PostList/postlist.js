import Link from 'next/link';

import Date from '../Date/date';

import { getSortedPostsData } from '../../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

function PostList({ allPostsData }) {
  return (
    <section>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <Date dateString={date} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default PostList;
