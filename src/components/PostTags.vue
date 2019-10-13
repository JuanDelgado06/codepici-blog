<template>
   <div class="post-tags">
   		<g-link class="post-tags__link" v-for="tag in post.tags" :key="tag.id" :to="tag.path">
   			<span>#</span>{{ tag.title }}
   		</g-link>
    </div>
</template>

<script>
export default {
  props: ['post']
}
</script>

<style lang="scss">
@import '@/assets/style/index';
.post-tags {
	margin: 1em 0 ;
	&__link {
		background: $c-accent;
		border-radius: 8px;
		color: $c-dark;
		font-size: .8em;
		text-decoration: none;
		transition: all .3s ease-in;
		margin-right: .7em;
		padding: .5em .2rem;	
		&:hover {
			background: $c-secondary;
			color: $c-dark;
		}
	}
}
</style>