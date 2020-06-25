using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Exam.Domain.Models
{
    public class Booking
    {
        public long Id { get; set; }
        public int UserId { get; set; }
        public int LocationId { get; set; }
        public DateTime Added { get; set; }
        public DateTime Start { get; set; }
        public DateTime End { get; set; }
        public State State { get; set; }
        public List<Comment> Comments { get; set; }
    }
}
