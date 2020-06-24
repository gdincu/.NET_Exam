using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Exam.Domain.Models;
using Microsoft.EntityFrameworkCore;


namespace Persistence.Contexts
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        { }
        public DbSet<Booking> Bookings { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Location> Locations { get; set; }
    }
}
