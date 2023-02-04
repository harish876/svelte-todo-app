<script>
	import ProgressBar from './ProgressBar.svelte';
	import { todos } from '../../store/TodoStore';

	$: totalCount = $todos.length;
	$: comepletedCount = $todos.filter((todo) => todo.completed).length;
	$: progressCount = $todos.filter((todo) => !todo.completed).length;
	$: completionPercentage = Math.round((comepletedCount / totalCount) * 100) || 0;
	$: progressPercentage = Math.round((progressCount / totalCount) * 100) || 0;
</script>

<section class="mt-10">
	<h3 class="text-xl font-bold text-gray-three">Progress Bar</h3>
	<div class="mt-8 space-y-8">
		<ProgressBar title="Progress" percentage={progressPercentage} />
		<ProgressBar title="Completed" percentage={completionPercentage} />
	</div>
</section>
