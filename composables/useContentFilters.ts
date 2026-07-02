export function useContentFilters<T extends { category?: string; type?: string }>(items: Ref<T[]> | T[]) {
  const activeFilter = ref('all')
  const source = isRef(items) ? items : ref(items)

  const filteredItems = computed(() => {
    if (activeFilter.value === 'all') return source.value
    return source.value.filter((item) => item.category === activeFilter.value || item.type === activeFilter.value)
  })

  return {
    activeFilter,
    filteredItems
  }
}
