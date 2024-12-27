let sessions = {};

const sessionService = {
  createSession: (sessionId, data) => {
    sessions[sessionId] = { ...data, startTime: new Date() };
  },
  updateSession: (sessionId, updates) => {
    if (sessions[sessionId]) {
      sessions[sessionId] = { ...sessions[sessionId], ...updates };
    }
  },
  endSession: (sessionId) => {
    if (sessions[sessionId]) {
      sessions[sessionId].endTime = new Date();
    }
  },
  getSession: (sessionId) => sessions[sessionId] || null,
};

export default sessionService;
