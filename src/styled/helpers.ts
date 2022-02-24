export const throwProp =
	<O extends object, P extends keyof O>(key: P) =>
	(props: O): O[P] =>
		props[key];
