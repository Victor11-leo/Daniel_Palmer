import { PortableText, PortableTextComponents } from "@portabletext/react"
import { urlFor } from "@/sanity/lib/image"

const components: PortableTextComponents = {
  types: {
    image: ({ value }) =>
      value?.asset ? (
        <figure className="my-8">
          <img
            src={urlFor(value).width(1200).height(800).fit("max").url()}
            alt={value.alt || " "}
            width={1200}
            height={800}
            className="rounded-lg object-cover"
          />
          {value.caption && (
            <figcaption className="text-sm text-gray-500 mt-2">
              {value.caption}
            </figcaption>
          )}
        </figure>
      ) : null,
    code: ({ value }) => (
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-6 text-sm">
        <code>{value.code}</code>
      </pre>
    ),
    // You can add other custom types like video, callouts, etc.
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold my-6 leading-snug">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold my-5 leading-snug">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold my-4 leading-snug">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-semibold my-3 leading-snug">{children}</h4>
    ),
    normal: ({ children }) => (
      <p className="text-lg leading-7 mb-4 text-gray-800">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-400 pl-4 italic my-6 text-gray-700">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc ml-6 space-y-2 my-4">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal ml-6 space-y-2 my-4">{children}</ol>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-gray-900">{children}</strong>
    ),
    em: ({ children }) => <em className="italic text-gray-700">{children}</em>,
    underline: ({ children }) => <span className="underline">{children}</span>,
    code: ({ children }) => (
      <code className="bg-gray-200 px-1 py-0.5 rounded text-sm">{children}</code>
    ),
    link: ({ value, children }) => {
      const target = value?.href?.startsWith("http") ? "_blank" : undefined
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className="text-blue-600 underline hover:text-blue-800"
        >
          {children}
        </a>
      )
    },
  },
}

export function RichText({ value }: { value: any }) {
  return <PortableText value={value} components={components} />
}
