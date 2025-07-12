const updateStatistics = require('./updateStatistics');

describe('updateStatistics', () => {

    beforeEach(() => {
        document.body.innerHTML = `
            <div id="totalRequests"></div>
            <div id="pendingRequests"></div>
            <div id="scheduledRequests"></div>
            <div id="completedRequests"></div>
        `;
    });

    test('should update statistics correctly', () => {
        const requests = [
            { status: 'Pending' },
            { status: 'Scheduled' },
            { status: 'Completed' },
            { status: 'Pending' }
        ];

        updateStatistics(requests);

        expect(document.getElementById('totalRequests').textContent).toBe('4');
        expect(document.getElementById('pendingRequests').textContent).toBe('2');
        expect(document.getElementById('scheduledRequests').textContent).toBe('1');
        expect(document.getElementById('completedRequests').textContent).toBe('1');
    });

    test('should handle empty requests array', () => {
        updateStatistics([]);

        expect(document.getElementById('totalRequests').textContent).toBe('0');
        expect(document.getElementById('pendingRequests').textContent).toBe('0');
        expect(document.getElementById('scheduledRequests').textContent).toBe('0');
        expect(document.getElementById('completedRequests').textContent).toBe('0');
    });
});