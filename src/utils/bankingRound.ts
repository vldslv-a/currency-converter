export const bankingRound = (value: number, precision = 2): number => {
  const factor = 10 ** precision;
  const scaled = value * factor;
  const floor = Math.floor(scaled);
  const diff = scaled - floor;

  if (diff !== 0.5) {
    return Math.round(scaled) / factor;
  }

  return (floor % 2 === 0 ? floor : floor + 1) / factor;
};
