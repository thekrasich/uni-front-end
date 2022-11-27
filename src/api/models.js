export const Event = event => ({
  ...event,
  startsAt: new Date(event.startsAt),
  endsAt: new Date(event.endsAt)
});

export const Party = party => ({
  ...Event(party),
  createdAt: new Date(party.createdAt)
});
