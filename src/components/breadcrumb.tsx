import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

interface BreadcrumbProps {
    labels: { label: string; url: string }[];
}

export default component$((props: BreadcrumbProps) => {
    return (
        <ol class="mb-4 flex items-center whitespace-nowrap" aria-label="Breadcrumb">
            {props.labels.map((label, index) => (
                <li key={index} class="inline-flex items-center">
                    {index < props.labels.length - 1 && (
                        <Link prefetch class="flex items-center text-sm text-grey hover:text-blue focus:outline-none focus:text-blue" href={label.url}>
                            {label.label}
                        </Link>
                    )}
                    {index === props.labels.length - 1 && (
                        <span class="flex items-center text-sm text-white">
                            {label.label}
                        </span>
                    )}
                    {index < props.labels.length - 1 && (
                        <span class="flex-shrink-0 mx-2 overflow-visible text-grey">{">"}</span>
                    )}
                </li>
            ))}
        </ol>
    );
});
