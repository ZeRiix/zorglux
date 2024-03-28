import { component$ } from "@builder.io/qwik";

interface BreadcrumbProps {
    labels: { label: string; url: string }[];
}

export default component$((props: BreadcrumbProps) => {
    return (
        <ol class="mb-4 flex items-center whitespace-nowrap" aria-label="Breadcrumb">
            {props.labels.map((label, index) => (
                <li key={index} class="inline-flex items-center">
                    <a class={["flex items-center text-sm hover:text-blue focus:outline-none focus:text-blue", index === props.labels.length - 1 ? 'text-white' : 'text-grey']} href={label.url}>
                        {label.label}
                    </a>
                    {index < props.labels.length - 1 && (
                        <svg class="flex-shrink-0 mx-2 overflow-visible size-4 text-grey" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                    )}
                </li>
            ))}
        </ol>
    );
});
