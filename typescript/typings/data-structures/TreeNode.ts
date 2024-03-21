export type NodeType = "ROOT" | "LEAF" | "INTERNAL"

export class Node {
    name: string;
	degree: number;
	depth: number;
	edges: number;
	siblings?: number;
	children?: number;
	type: NodeType;
}
