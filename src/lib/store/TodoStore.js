import { v4 as uuidv4 } from 'uuid';
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const data = browser ? JSON.parse(window.localStorage.getItem('harish-todo-list')) ?? [] : [];

export const todos = writable(data);

todos.subscribe((value) => {
	if (browser) {
		localStorage.setItem('harish-todo-list', JSON.stringify(value));
	}
});

export const addTodo = () => {
	todos.update((currentTodos) => {
		return [...currentTodos, { id: uuidv4(), text: '', completed: false }];
	});
};

export const deleteTodo = (id) => {
	todos.update((todos) => {
		return todos.filter((todo) => todo.id !== id);
	});
};

export const toggleTodo = (id) => {
	todos.update((todos) => {
		return todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, completed: !todo.completed };
			}
			return todo;
		});
	});
};

export const editTodo = (id, text) => {
	todos.update((todos) => {
		return todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, text };
			}
			return todo;
		});
	});
};
