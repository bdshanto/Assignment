using EmployeeApp.Models;
using Microsoft.EntityFrameworkCore;

namespace EmployeeApp.Context
{
    public class ApplicationDbContext: DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options): base(options)
        {
            
        }
        public DbSet<Employee> Employees { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Employee>().Property(c => c.Name).HasMaxLength(100);
            modelBuilder.Entity<Employee>().Property(c => c.Address).HasMaxLength(500);
            modelBuilder.Entity<Employee>().Property(c => c.Email).HasMaxLength(100);
            modelBuilder.Entity<Employee>().Property(c => c.Phone).HasMaxLength(100);
            base.OnModelCreating(modelBuilder);
        }
    }
}