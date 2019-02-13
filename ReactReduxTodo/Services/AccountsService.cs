using ReactReduxTodo.Data;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ReactReduxTodo.Entities;
using ReactReduxTodo.Models;

namespace ReactReduxTodo.Services
{
    public class AccountsService
    {
        private readonly ApplicationDbContext _applicationDbContext;

        public AccountsService(ApplicationDbContext applicationDbContext)
        {
            _applicationDbContext = applicationDbContext;
        }

        public async Task<IList<Account>> ListAsync()
        {
            return await _applicationDbContext.Accounts.OrderBy(entity => entity.BranchCode).ToListAsync();
        }

        public async Task<Account> GetAsync(int branchCode)
        {
            return await _applicationDbContext.Accounts.FindAsync(branchCode);
        }

        public async Task<int> AddAsync(Account account)
        {
            var entityEntry = await _applicationDbContext.AddAsync(account);
            await _applicationDbContext.SaveChangesAsync();
            return entityEntry.Entity.BranchCode;
        }
    }
}
