using EmployeeApp.Models;
using Microsoft.EntityFrameworkCore;

namespace EmployeeApp.Context
{
    public class ApplicationDbContext: DbContext
    {
        public ApplicationDbContext(): base()
        {
            
        }
        public DbSet<Employee> Employees { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server= SHAN; Database=EmployeeInfo; Integrated Security= True");
            base.OnConfiguring(optionsBuilder);
        } 
    }
}