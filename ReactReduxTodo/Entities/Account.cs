using System.ComponentModel.DataAnnotations;
namespace ReactReduxTodo.Entities
{
    public class Account
    {
        [Key]
        public int BranchCode { get; set; }
        public string Subject { get; set; }
        public string AccountNumber { get; set; }
        public string BranchName { get; set; }
        public string AccountHolder { get; set; }
        public string AccountMemo { get; set; }
        public decimal Balance { get; set; }
        public decimal PayableBalance { get; set; }
    }
}
