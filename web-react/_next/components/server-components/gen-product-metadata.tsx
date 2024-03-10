// 
import { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
export async function generateMetadata(
  { params, searchParams }: Props, 
  parent: ResolvingMetadata 
  ): Promise<Metadata> {
	const id = params.id 

	const product = await fetch(`https://.../${id}`).then((res) => res.json())

	const previousImages = (await parent).openGraph?.images || []

	return {
		title: product.title, 
		openGraph: {
			images: ['/some-specific-page-image.jpg', ...previousImages],
		},
	}
}

export default function Page({ params, searchParams}: Props) {}