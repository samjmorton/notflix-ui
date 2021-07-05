import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'src/data');

export function getSortedPostsData(): IPostData[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
			id,
			...matterResult.data
		};
  }) as IPostData[];

  // Sort posts by date
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    }
      return 0;
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => ({
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    }));
}

export async function getPostData(id: string): Promise<IGetPostData> {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const {content, data} = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const contentHtml = await (await remark().use(html).process(content)).toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...data
  }
}

export interface IGetPostData {
	id: string;
	contentHtml: string;
  [key: string]: any;
}

export interface IPostData {
	id: string;
  [key: string]: any;
	date: string;
}