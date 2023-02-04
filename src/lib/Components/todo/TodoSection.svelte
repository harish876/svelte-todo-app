<script>
    import { todos } from "../../store/TodoStore";
    import TodoSectionInput from "./TodoSectionInput.svelte";
</script>

<section>
    {#each $todos as todo (todo.id) }
       <TodoSectionInput {todo}/>
    {/each}
</section>