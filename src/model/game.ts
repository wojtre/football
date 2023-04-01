export type Lineup = {
    blackPlayers: string[];
    whitePlayers: string[];
    benchPlayers: string[];
};

export type Game = {
    id: number;
    lineup: Lineup;
    blackTeamGoals: number | null;
    whiteTeamGoals: number | null;
    date: string;
};
