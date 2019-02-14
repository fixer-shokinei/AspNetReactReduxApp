const ENDPOINT = '/api/Accounts';

class AccountsService {
    async getAccountsAsync() {
        const url = `${ENDPOINT}`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`AccountsService.getAccountsAsync failed, HTTP status ${response.status}`);
        }
        const data = await response.json();
        return data;
    }

    async getAccountsByIdAsync(accountId) {
        const url = `${ENDPOINT}/${accountId}`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`AccountsService.getAccountsByIdAsync failed, HTTP status ${response.status}`);
        }
        const data = await response.json();
        return data;
    }

}

export const accountsService = new AccountsService();