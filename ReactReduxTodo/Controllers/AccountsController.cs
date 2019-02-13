using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactReduxTodo.Dto;
using ReactReduxTodo.Models;
using ReactReduxTodo.Services;
using System.Collections.Generic;
using System.Threading.Tasks;
using ReactReduxTodo.Entities;

namespace ReactReduxTodo.Controllers
{
    [Route("api/accounts")]
    [Produces("application/json")]
    [Consumes("application/json")]
    [ApiController]
    public class AccountsController : ControllerBase
    {
        private readonly AccountsService _accountsService;

        public AccountsController(AccountsService accountsService)
        {
            _accountsService = accountsService;
        }

        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<Account>), StatusCodes.Status200OK)]
        public async Task<IEnumerable<Account>> List()
        {
            return await _accountsService.ListAsync();
        }

        [HttpGet("{branchcode}")]
        [ProducesResponseType(typeof(Account), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ApiErrorResult), StatusCodes.Status404NotFound)]
        public async Task<ActionResult<Account>> Get(int branchcode)
        {
            var model = await _accountsService.GetAsync(branchcode);
            if (model == null)
            {
                return NotFound(new ApiErrorResult(StatusCodes.Status404NotFound, "Not found", $"Entity {branchcode} not found"));
            }
            return model;
        }
    }
}
