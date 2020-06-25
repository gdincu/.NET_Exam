using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Exam.Domain.Models
{
    public class Comment
    {
        public long Id { get; set; }
        public string Author { get; set; }
        public DateTime Added { get; set; }
        //[MinLength(5, ErrorMessage = "Content to be longer than 5 characters")]
        public string Content { get; set; }
        public Rating Rating{ get; set; }
        //[Required]
        public int BookingId { get; set; }
    }
}
