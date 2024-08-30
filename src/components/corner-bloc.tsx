import { component$ } from "@builder.io/qwik";

interface CornerBlocProps {
    positionX: 'left-0' | 'right-0';
    positionY: 'top-0' | 'bottom-0';
}

export default component$((props: CornerBlocProps) => {
    const { positionX, positionY } = props;

    return (
        <div class={["absolute w-6 h-1 bg-grey", positionX, positionY]}>

        </div>
    );
});
