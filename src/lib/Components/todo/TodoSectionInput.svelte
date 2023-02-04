<script>
	import { deleteTodo, editTodo, toggleTodo } from '../../store/TodoStore';
	import DeleteIcon from '../DeleteIcon.svelte';

	export let todo;
	$: completeClass = todo.completed ? 'bg-green-three' : 'bg-leaf-one';
</script>

<div
	class="flex flex-row items-center justify-between rounded-md border-2 border-gray-one px-5 py-4"
>
	<div class="flex w-full max-w-lg items-center justify-start">
		<label class="sr-only" for={`${todo.id}-checkbox`}>Complete Todo</label>
		<input
			id={`${todo.id}-checkbox`}
			type="checkbox"
			checked={todo.completed}
			on:change={() => toggleTodo(todo.id)}
			class="h-4 w-4 rounded border border-gray-three bg-cream-four text-green-four focus:border-green-five focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-green-five"
		/>
		<label for={`${todo.id}-text`} class="sr-only">Edit Todo</label>
		<input
			id={`${todo.id}-text`}
			type="text"
			value={todo.text}
			placeholder="Enter a todo"
			on:input={(e) => editTodo(todo.id, e.target.value)}
			class="ml-5 flex-1 text-ellipsis rounded-none border-x-0 border-t-0 border-b border-dashed border-b-gray-two bg-cream-four px-0 pb-1 text-base font-normal text-gray-three placeholder:text-gray-two focus:border-gray-three focus:outline-none focus:ring-0"
		/>
		<span
			class="{completeClass} ml-5 hidden rounded-full py-0.5 px-2 text-sm font-normal text-gray-five md:block"
		>
			{todo.completed ? 'Completed' : 'In Progress'}
		</span>
		<button
			type="button"
			on:click={() => deleteTodo(todo.id)}
			class="group ml-4 flex items-center justify-center rounded-md bg-cream-four p-2 hover:bg-steel-one focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-five"
		>
			<span class="sr-only"> Delete Todo </span>
			<DeleteIcon />
		</button>
	</div>
</div>
