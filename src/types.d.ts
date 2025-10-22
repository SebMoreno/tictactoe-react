type Player = "X" | "O";
type BoardCells = Array<Player | null>;

type FC<P = Record<string, never>> = import("react").FC<P>;